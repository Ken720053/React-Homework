import { useState } from "react";

const menu = [
    {
        "id": 1,
        "name": "珍珠奶茶",
        "describe": "香濃奶茶搭配QQ珍珠",
        "price": 50,
        "stock": 20,
    },
    {
        "id": 2,
        "name": "冬瓜檸檬",
        "describe": "清新冬瓜配上新鮮檸檬",
        "price": 45,
        "stock": 18,
    },
    {
        "id": 3,
        "name": "翡翠檸檬",
        "describe": "綠茶與檸檬的完美結合",
        "price": 55,
        "stock": 34,
    },
    {
        "id": 4,
        "name": "四季春茶",
        "describe": "香濃奶茶搭配QQ珍珠",
        "price": 50,
        "stock": 20,
    },
    {
        "id": 5,
        "name": "阿薩姆奶茶",
        "describe": "阿薩姆紅茶搭配香醇鮮奶",
        "price": 50,
        "stock": 25,
    },
    {
        "id": 6,
        "name": "檸檬冰茶",
        "describe": "檸檬與冰茶的清新組合",
        "price": 45,
        "stock": 20,
    },
    {
        "id": 7,
        "name": "芒果綠茶",
        "describe": "芒果與綠茶的獨特風味",
        "price": 55,
        "stock": 18,
    },
    {
        "id": 8,
        "name": "抹茶拿鐵",
        "describe": "抹茶與鮮奶的絕配",
        "price": 60,
        "stock": 20,
    }
]

function App () {
    const [Todo, setTodo] = useState(menu)
    const[text , setText] = useState("")
    //數量增加
    const stockadd = (items) => {
        const add = Todo.map((NewTodo) =>{ 
            if(NewTodo.id === items.id) {
                NewTodo.stock = NewTodo.stock +1
            }
            return NewTodo;
        });
        setTodo(add)
    }
    //數量減少
    const stockreduce = (items) => {
        const reduce = Todo.map((NewTodo) =>{ 
            if(NewTodo.id === items.id && NewTodo.stock>0 ) {
                NewTodo.stock = NewTodo.stock -1
            }
            return NewTodo;
        });
        setTodo(reduce)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleOnClick = () => {
        <input type="text" value={text} onChange={handleOnChange} />
    }
    return <div>
        React-第一周作業
        <table>
            <thead>
                <tr>
                    <th>品項</th>
                    <th>描述</th>
                    <th>價格</th>
                    <th>庫存</th>
                </tr>  
            </thead>
            <tbody>
                    {
                        Todo.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td onClick={() => {handleOnClick}}>{item.name}</td>
                                    <td>{item.describe}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => {stockreduce(item)}}>-</button>
                                        {item.stock}
                                        <button onClick={() => {stockadd(item)}
                                        }>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
    </div>
}

export default App;