"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";
import { React } from "react";
import Swal from "sweetalert2";
import Image from "next/image";

export default function Home() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCourses(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Web de Cursos MERGEEE</h1>
      <div className="df fdc g5">
      {courses.map((c) => {
        return (
        <div className="df aic jcsb g5 fw" style={{backgroundColor: 'white', borderRadius:'20px', padding:'20px'}} key = {c._id}>
          <div>
            <p style={{color: 'black'}}>Curso: {c.name}</p>
            <p style={{color: 'black'}}>Precio: ${c.price}</p>
          </div>
          <Image
          src={c.thumbnail}
          width={500}
          height={500}
          alt="Miniatura Mongo DB"
          />
        </div>)
      })}
      </div>
    </div>
  );
}
