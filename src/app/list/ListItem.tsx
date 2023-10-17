'use client'

import Link from "next/link";

type Props = {
  _id: string;
  title: string;
  content: string;
};

export default function ListItem({_id, title, content}: Props) {

  const onClick = (e: any) => {
    fetch(`/api/delete/${_id}`, { method: 'DELETE' })
      .then((res) => {
        return res.json();
      }).then((result) => {
        e.target.parentElement.style.opacity = 0;
        setTimeout(() => {
          e.target.parentElement.style.display = 'none';
        }, 1000);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className="list-item">
      <Link href={`/detail/${_id}`}>
        <h4>{title}</h4>
      </Link>
      <Link href={`/edit/${_id}`}>✏️</Link>
      <span className="btn-delete" onClick={onClick}>🗑</span>
      <p>{content}</p>
    </div>
  );
}