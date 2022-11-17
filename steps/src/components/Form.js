import './style.css'
import React from 'react'
function Form({onSubmit}) {
    
  const [date, setDate] = React.useState('');
  const handleDateInput = (e) => {
    setDate(() => e.target.value);
  };

  const [km, setKm] = React.useState('');
  const handleKmInput = (e) => {
    setKm(() => e.target.value);
  };

  const resetForm = () => {
    setDate(() => '');
    setKm(() => '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) {
      onSubmit({
        date,
        km: parseFloat(km) || 0,
      });
      resetForm();
    }
  };


    return (
    <form className="form" onSubmit={handleSubmit}>
        <div className="input">
            <label for="exampleInputEmail1" className="form-label">Дата(ДД.ММ.ГГ)</label>
            <input type="date" className="form-date" id="exampleInputEmail1" placeholder="дд.мм.гггг" value={date} onChange={handleDateInput}></input>

        </div>
        <div className="input">
            <label for="exampleInputPassword1" className="form-label">Пройдено км</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="0 км" value={km} onChange={handleKmInput}></input>
        </div>
        <button type="submit" className="btn btn-primary">ОК</button>
    </form>
    );
};

export default Form;