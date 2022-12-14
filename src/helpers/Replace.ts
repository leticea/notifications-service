export type Replace<T, R> = Omit<T, keyof R> & R;

// código de uma 'função de ajuda' que serve para receber 2 tipagens (a original e uma de replace);