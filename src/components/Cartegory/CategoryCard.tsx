type categoryCardProps = {
    img: string,
    id: number,
    title: string
}

function CategoryCard ({img,id,title}:categoryCardProps) {
    return(
        <>
           <div className="flex flex-col justify-between items-center w-15.5 h-14.5 " key={id}>
                <img src={img} alt="" className="w-8.5 h-8.5"/>
                <p className="text-[11px]">{title}</p>
                </div>
        </>
    )
}

export default CategoryCard 