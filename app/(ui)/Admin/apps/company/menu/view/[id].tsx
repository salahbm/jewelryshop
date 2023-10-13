// ** Types

// ** Demo Components Imports
import View from 'src/views/apps/company/menu/view/MenuView'

const MenuView = () => {
  return <View />
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await axios.get('/apps/menu/list')
//   const data: MenuTypes[] = await res.data.allData

//   const paths = data.map((item: MenuTypes) => ({
//     params: { id: `${item.idx}` }
//   }))

//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
//   const id = params?.id
//   const res = await axios.get(`/apps/menu/single-list`, { params: { id } })
//   const data = res.data.data

//   return {
//     props: {
//       data
//     }
//   }
// }

MenuView.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default MenuView
