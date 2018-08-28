// .container {
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto; }
// @media (min-width: 576px) {
// .container {
//     max-width: 540px; } }
// @media (min-width: 768px) {
// .container {
//     max-width: 720px; } }
// @media (min-width: 992px) {
// .container {
//     max-width: 960px; } }
// @media (min-width: 1200px) {
// .container {
//     max-width: 1140px; } }

// es = {
//   giant: 1170,
//   desktop: 992,
//   tablet: 768,
//   phone: 376,
import styled from 'styled-components'
import media from '../styleUtils/media'

const Container = styled.div`
  width: 100%;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  ${media.tablet`max-width: 720px`};
  ${media.giant`max-width: 960px`};
`

export default Container
