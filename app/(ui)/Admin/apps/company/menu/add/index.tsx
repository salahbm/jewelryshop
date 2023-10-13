// ** Next Import

// ** Third Party Imports

// ** Types

// ** Demo Components Imports
import AddMenuPage from 'src/views/apps/company/menu/addMenu/addMenuView'

const MenuAdd = () => {
  return <AddMenuPage />
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
MenuAdd.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default MenuAdd
