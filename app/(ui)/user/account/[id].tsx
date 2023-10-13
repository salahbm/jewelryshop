// ** Demo Components Imports
import UserViewPage from 'src/views/apps/user/view/UserViewPage'

const UserView = (id: string | number) => {
  return <UserViewPage id={id} tab='account' />
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await axios.get('/apps/users/list2')
//   const data: UsersType2[] = await res.data.allData

//   const paths = data.map((item: UsersType2) => ({
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
UserView.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default UserView
