import Image from "next/image"

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Image className="animate-spin" src={"/images/loadingCircle.png"} width={54} height={54} alt="Loading..." />
    </div>
  )
}

export default Loading