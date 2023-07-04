import "./TesKesehatan.css";

const TesKesehatan = ({name,onChange,labelClass,inputClass,id,value})=> {
    return (
        <section>
          <input type="radio" name={name} value={value} id={id} className={inputClass} onChange={onChange}/>
          <label className={labelClass} htmlFor={id}></label>
        </section>
      )
}

export default TesKesehatan;