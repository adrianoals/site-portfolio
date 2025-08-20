/**
 * Função para download do CV
 * @param filename - Nome do arquivo para download
 */
export const downloadCV = (filename: string = 'cv-adriano-drili.pdf') => {
  const link = document.createElement('a');
  link.href = `/${filename}`;
  link.download = filename;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Função alternativa que abre o PDF em nova aba
 * @param filename - Nome do arquivo para abrir
 */
export const openCV = (filename: string = 'cv-adriano-drili.pdf') => {
  window.open(`/${filename}`, '_blank');
};
