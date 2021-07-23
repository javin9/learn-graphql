/*
 * @Desc: 
 * @FilePath: /learn-graphql/packages/react-client/src/App.js
 * @Author: liujianwei1
 * @Date: 2021-07-23 15:12:09
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */
// import logo from './logo.svg'
import './App.css'
import { gql, useQuery } from "@apollo/client"

const channelsListQuery = gql`
  query {
    getUserList{
      id
      name
    }
}
 `


const ChannelsList = () => {
  const res = useQuery(channelsListQuery)
  console.log(res)
  if (res.loading) {
    return <p>Loading ...</p>
  }
  if (res.error) {
    return <p>{res.error.message}</p>
  }
  return <>{Array.isArray(res.data.getUserList) ? res.data.getUserList.map(ch => <p key={ch.id}>{ch.name}</p>) : <p>暂无数据</p>}</>

}



function App () {
  return (
    <div className="App">
      <header>  Welcome to Apollo.</header>
      <ChannelsList />
    </div>
  )
}

export default App
