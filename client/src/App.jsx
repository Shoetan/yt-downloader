const App = () => {
  return ( 
    <div>
      <div className="container mx-auto flex justify-center gap-2 mt-10">
        <input type="text" 
          placeholder="url..."
          className="font_poppins rounded-sm h-11 w-96 p-6 focus:outline-none"
        />
        <button className='font-poppins bg-slate-400 p-2 rounded-md'>Download</button>
      </div>
    </div>
   );
}
 
export default App;