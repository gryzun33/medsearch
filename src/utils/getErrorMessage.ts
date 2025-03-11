import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError
): string => {
  if ('status' in error) {
    if (error.data && typeof error.data === 'object') {
      if ('message' in error.data && typeof error.data.message === 'string') {
        return error.data.message;
      }
    }

    return 'error' in error
      ? error.error
      : JSON.stringify(error.data) || 'An unknown error occurred';
  }

  if ('message' in error) {
    return error.message || 'An unexpected error occurred';
  }

  return 'An unexpected error occurred';
};

// export const getErrorMessage = (
//   error: FetchBaseQueryError | SerializedError
// ): string => {
//   if ('status' in error) {
//     if (typeof error.data === 'object' && error.data !== null) {
//       // Если data — объект, пытаемся взять message, иначе сериализуем объект
//       return (error.data as { message?: string }).message || JSON.stringify(error.data);
//     }
//     return typeof error.error === 'string' ? error.error : 'An unknown error occurred';
//   }

//   if ('message' in error) {
//     return error.message || 'An unexpected error occurred';
//   }

//   return 'An unexpected error occurred';
// };
