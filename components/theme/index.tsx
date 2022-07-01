export interface BasedTheme {
  primaryColor: {
    main: string
  }
  fontFamily: string
}

export const defaultTheme: BasedTheme = {
  primaryColor: {
    main: '#25a1b1',
  },
  fontFamily: 'Inter',
}
