import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Child from './components/Child'
import Child2 from './components/Child2'


interface BannerItem {
  targetId: number;
  imageUrl: string;
}

// interface ApiResponse {
//   banners: BannerItem[];
// }

interface Form {
  name: string;
  age: number;
}

// React:FC(FunctionComponent)：表示是个函数组件
const App: React.FC = () => {

  const h1Ref = useRef<HTMLHeadingElement>(null)
  const [count, setCount] = useState<number>(0)
  // 定义数组
  const [banner, setBanner] = useState<BannerItem[]>([])
  // // 定义对象，有默认值时，可以根据默认值反推
  // const [form, setForm] = useState({
  //   name: 'xm',
  //   age: 22
  // })
  const [form, setForm] = useState<Form>({
    name: 'xm',
    age: 22
  })
  // const [form, setForm] = useState<Form>({} as Form) // 没有默认值时，确定空对象时Form类型

  useEffect(() => {
    console.log(h1Ref.current?.outerHTML)
    // fetch('https://zyxcl.xyz/music/api/banner')
    //   .then(res => res.json())
    //   .then((res: ApiResponse) => {
    //     // console.log(res.banners)
    //     setBanner(res.banners)
    //   })
    axios.get<{banners: BannerItem[]}>('https://zyxcl.xyz/music/api/banner')
      .then(res => {
        console.log(res.data.banners)
        setBanner(res.data.banners)
      })
  }, [])

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      name: e.target.value
    })
  }

  const clickH1 = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    console.log((e.target as HTMLHeadingElement).innerHTML)
  }

  return (
    <div>
      <h1 onClick={clickH1} ref={h1Ref}>App</h1>
      <p>count：{count}</p>
      <button onClick={() => setCount(count + 1)}>count +</button>
      <hr />
      <p>姓名：{form.name}</p>
      <input type="text" value={form.name} onChange={changeName} />
      <p>年龄：{form.age}</p>
      <hr />
      <Child count={count} name={form.name} onAdd={n => setCount(count + n)}></Child>
      <hr />
      <Child2 count={count} name={form.name} onAdd={n => setCount(count + n)}></Child2>
      <hr />
      <ul>
        {banner.map(item => 
          <li key={item.targetId}>
            <img src={item.imageUrl} width={300} alt="" />
          </li>
        )}
      </ul>
    </div>
  )
}

export default App