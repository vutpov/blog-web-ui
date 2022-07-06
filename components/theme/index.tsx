export interface BasedTheme {
  primaryColor: {
    main: string
  }
  grayColor: {
    l1: string
  }
  fontFamily: string
}

export const defaultTheme: BasedTheme = {
  primaryColor: {
    main: '#25a1b1',
  },
  grayColor: {
    l1: '#BBBBBB',
  },
  fontFamily: 'Inter',
}
