import { css, createGlobalStyle } from "styled-components"

export const size = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140,
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const GlobalStyles = createGlobalStyle`
  .___gatsby{
    position: absolute;
  }
  main{
    padding-top: 3.5rem;
  }
  ${above.medium`
   main{
      padding-top: calc(3.5rem - 100vh);
    }
    `}
  ${above.large`
   main{
      padding-top: calc(4.5rem - 100vh);
    }
  `}
`
