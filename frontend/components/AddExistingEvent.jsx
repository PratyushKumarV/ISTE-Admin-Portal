function AddExistingEvent(){
    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="relative bg-black [flex-grow:1] flex items-center shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]"> {/* relative to this block the absolutely positioned elements are arranged */}
                    <img src="../src/assets/images/iste-logo-final 1.svg" className="h-[12vh] float-left mx-4"/>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-white text-6xl font-['Anton']">
                            ISTE
                        </div>
                    </div>
                </div>
                <div className="[flex-grow:20] bg-[#EAE1EB] flex flex-col">
                    <button className="font-['Anton'] text-4xl [flex-grow:1] self-start mt-[6vh] ml-[6vw] cursor-pointer">Back</button>
                    <form className="font-['Anton'] flex flex-col [flex-grow:24] w-[25vw] mx-auto items-center">
                        <p className="text-3xl">Edit Existing Event</p>
                        <input type="text" placeholder="Event Name" className="mt-4 w-full bg-white border-2 border-black p-2"/>
                        <input type="text" placeholder="Event Description" className="mt-4 w-full bg-white border-2 border-black p-2"/>
                        <input type="url" placeholder="Event Date" className="mt-4 w-full bg-white border-2 border-black p-2"/>
                        <input type="text" placeholder="Event Venue" className="mt-4 w-full bg-white border-2 border-black p-2"/>
                        <input type="text" placeholder="Event Speaker Name" className="mt-4 w-full bg-white border-2 border-black p-2"/>
                        <input type="text" placeholder="Speaker Registration Number" className="mt-4 w-full bg-white border-2 border-black p-2"/>
                        <input type="text" placeholder="Upload Banner Photo" className="mt-4 w-full bg-white border-2 border-black p-2"/>
                        <input type="text" placeholder="Upload Event Photos" className="mt-4 w-full bg-white border-2 border-black p-2"/>
                        <button className="mt-4 w-full bg-[#D8C7D9] border-2 border-black p-2 cursor-pointer">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddExistingEvent