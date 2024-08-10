import Link from "next/link"

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center h-screen ml-[220px] space-y-5'>
        <p className="ml-8 text-6xl font-bold">Oops! The page you requested wasn't found.</p>
        <p className="ml-8 text-2xl">Go back to the <Link href={`/`} className="underline">Home</Link> </p>
    </div>
  )
}

export default NotFound