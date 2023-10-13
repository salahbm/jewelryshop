// ** Next Import
// import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
// import axios from 'axios'

// ** Types

// ** Demo Components Imports
import HqViewPage from 'src/views/apps/company/hq/view/HqView'

// import { HqTypes } from 'src/types/apps/hqTypes'

const HqView = () => {
  return <HqViewPage />
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await axios.get('/apps/hq/list')
//   const data: HqTypes[] = await res.data.allData

//   const paths = data.map((item: HqTypes) => ({
//     params: { id: `${item.id}` }
//   }))

//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
//   return {
//     props: {
//       id: params?.id
//     }
//   }
// }
HqView.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default HqView
