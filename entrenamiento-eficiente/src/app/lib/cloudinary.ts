// Comentario (ES): Utilidades de servidor para listar recursos de Cloudinary por carpeta.
// Uso: llama a `listCloudinaryFolderResources` desde componentes de servidor para obtener imágenes/vídeos.

import { v2 as cloudinary } from "cloudinary";

// Configuración automática via CLOUDINARY_URL. No exponer secretos en cliente.
cloudinary.config({
  secure: true,
});

export type CloudinaryAsset = {
  publicId: string;
  secureUrl: string;
  width: number;
  height: number;
  format: string;
  resourceType: "image" | "video" | string;
};

export async function listCloudinaryFolderResources(folderNameOrPrefix: string, resourceType: "image" | "video"): Promise<CloudinaryAsset[]> {
  const results: CloudinaryAsset[] = [];
  let nextCursor: string | undefined = undefined;

  // Logs eliminados para producción

  try {
    // Estrategia A: buscar por nombre de asset_folder (visible en la UI)
    if (results.length === 0) {
      // Buscar por nombre de asset folder
      nextCursor = undefined;
      do {
        const res: any = await (cloudinary as any).search
          .expression(`asset_folder="${folderNameOrPrefix}" AND resource_type:${resourceType}`)
          .max_results(100)
          .next_cursor(nextCursor)
          .execute();

        // Sin logs detallados

        for (const item of res.resources ?? []) {
          results.push({
            publicId: item.public_id,
            secureUrl: item.secure_url,
            width: item.width,
            height: item.height,
            format: item.format,
            resourceType: item.resource_type,
          });
        }
        nextCursor = res.next_cursor;
      } while (nextCursor);
    }

    // Estrategia B: fallback a carpeta de subida (folder prefix)
    if (results.length === 0) {
      // Fallback a prefijo de carpeta de subida
      nextCursor = undefined;
      do {
        const res = await cloudinary.api.resources({
          type: "upload",
          prefix: folderNameOrPrefix.endsWith("/") ? folderNameOrPrefix : folderNameOrPrefix + "/",
          resource_type: resourceType,
          max_results: 100,
          next_cursor: nextCursor,
        });

        // Sin logs detallados

        for (const item of res.resources ?? []) {
          results.push({
            publicId: item.public_id,
            secureUrl: item.secure_url,
            width: item.width,
            height: item.height,
            format: item.format,
            resourceType: item.resource_type,
          });
        }

        nextCursor = res.next_cursor;
      } while (nextCursor);
    }
  } catch (error) {
    // Silenciar errores de traza en cliente; maneja vacío
  }
  
  return results;
}

