import { Box } from '@chakra-ui/react'
import Layout from '../components/layouts/ani-page'

const Lofi = () => {
  return (
    <Layout>
      <Box pt='55px' h='80vh'>
        <iframe
          src='http://www.lofistation.ray2005.tech'
          height={400}
          width={740}
        />
      </Box>
    </Layout>
  )
}

export default Lofi
