import React, { Component } from 'react'
import "../css/Inicio.css";
import shortid from "shortid";

function Inicio() {
    const [tarea, setTarea] = React.useState('')
    const [tareas, setTareas] = React.useState([])
    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [id, setId] = React.useState('')
    const [error, setError] = React.useState(null)
    const [items, setItems] = React.useState([])

    const agregarTarea = e => {
        e.preventDefault()
        if (!tarea.trim()) {
            console.log('Campo vacio')
            setError('El campo no puede estar Vacío')
            return
        }
        setTareas([
            ...tareas,
            { tarea, id: shortid.generate() }
            //  ...tareas,
            //  {tarea, id: shortid.generate()}
        ])
        setTarea('')
        setError(null)
    }

    const eliminarTarea = id => {
        const arrayFiltrado = tareas.filter(item => item.id !== id)
        setTareas(arrayFiltrado)
    }

    const pasarTarea = id => {
        const todoNew = [...tareas]
        let todo = todoNew.find((todo) => todo.id = id)
        todo.isComplete = !todo.isComplete
        setTareas(todoNew)
    }
    const handleClick = id => {
        const newItem = { id: Date.now(), name: id };
        setItems(prevItems => [...prevItems, newItem]);
    }

    return (
        <div className='background'>
            <div className="container text-center">
                <h1 className="text-center-m" style={{ color: "#94ADCF" }}>My Tasks</h1>
                <div className="row align-items-center">
                    <div className="row componente">
                        <div className='m-0 row justify-content-center'>
                            <div className="col-auto text-center">
                                <form className='row g-3' onSubmit={agregarTarea}>
                                    <div class="col-auto">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Add new task"
                                            onChange={e => setTarea(e.target.value)}
                                            value={tarea}
                                            style={{ background: "#38404B", border: "20px", color: "#94ADCF", fontSize: "1.5em", boxShadow: "0px 0px 5px 1px black" }} />
                                    </div>
                                    <div class="col-auto">
                                        {
                                            (
                                                <button className=" btn-block" type="submit" ><img src='https://cdn-icons-png.flaticon.com/128/271/271228.png' className='img' style={{ color: "white" }}></img></button>
                                            )
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col">
                            <div className='container text-center'>
                                <div className='row align-items-center'>
                                    <ul className="list-group">
                                        {
                                            tareas.length === 0 ? (
                                                <div>
                                                    <li className="list-group-item" style={{ color: "#94ADCF", background: "#38404B", border: "20px" }}></li>
                                                </div>
                                            ) : (
                                                tareas.map(item => (
                                                    <div className='container text-center'>
                                                        <div className='row justify-content-center'>
                                                            <div className='col-4'>
                                                                <li className="list-group-item" key={item.id} style={{ color: "#94ADCF", background: "#38404B", fontSize: "1.5em", boxShadow: "0px 0px 5px 1px black", border: "20px", verticalAlign: "middle", lineHeight: "25px", fontFamily: "sans-serif" }}>
                                                                    <span className="lead">{item.tarea}</span>
                                                                    <button
                                                                        className="btn btn-sm float-right mx-2"
                                                                        onClick={() => eliminarTarea(item.id)}
                                                                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" style={{ display: "inline-block", verticalAlign: "top", color: "white" }}>
                                                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                                        </svg>
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-sm float-right mx-2"
                                                                        onClick={() => handleClick(item.id)}
                                                                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16" style={{ display: "inline-block", verticalAlign: "top", color: "white" }}>
                                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                        </svg>
                                                                    </button>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='container text-center'>
                                <div className='row justify-content-center'>
                                    <h1 className="text-center-m">Completed</h1>
                                    <div className='col-4'>


                                        <ul className="list-group">
                                            {
                                                tareas.length === 0 ? (
                                                    <li className="list-group-item" style={{ color: "#94ADCF", background: "#38404B", border: "20px" }}></li>
                                                ) : (
                                                    items.map(item => (
                                                        <li className="list-group-item" key={item.name} style={{ color: "#94ADCF", background: "#38404B", fontSize: "1.5em", boxShadow: "0px 0px 5px 1px black", border: "20px", verticalAlign: "middle", lineHeight: "25px", textDecorationLine: "line-through", fontFamily: "sans-serif" }}>
                                                            <span className="lead">{item.tarea}</span>
                                                        </li>
                                                    ))
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Inicio;