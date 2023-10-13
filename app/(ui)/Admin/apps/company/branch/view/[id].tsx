// ** Next Import
// import { InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports

// ** Types

// ** Demo Components Imports
import View from 'src/views/apps/company/branch/view/BranchView'

const BranchView = () => {
  return <View />
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await axios.get('/apps/hq/list')
//   const data: BranchType[] = await res.data.allData

//   const paths = data.map((item: BranchType) => ({
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
BranchView.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default BranchView
