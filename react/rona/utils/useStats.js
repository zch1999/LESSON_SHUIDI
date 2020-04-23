import { useState, useEffect } from 'react'//共享状态的useState

// 状态
export default function useStats( url ){
  // console.log(url)
  const [stats, setStats] = useState()
  //加载ajax,loading
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  //生命周期函数
  useEffect(() => {
    // console.log('mouted')
    async function fectchData() {
      setLoading(true)
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err)
        })
  //     // console.log(data)
      setStats(data)
      setLoading(false)
    }
    fectchData();
  },[url])
  
  return {
    stats,
    loading,
    error
  }
}