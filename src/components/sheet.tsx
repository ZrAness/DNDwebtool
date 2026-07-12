import { useState } from 'react'
import './Sheet.css'
import supabase from '../supabaseClient';
export default Sheet
function Sheet() {
    type fightingclasses= |'Knight'|'Warrior'|'Rogue'|'Paladin'|'Spellblade'|'Wizard'|'Catalyst'|'Archer'|'Morpher'|'Beast tamer'|'Summoner'|'Martial artist';
    type species= 'Forest Elf'|'Ice Elf'|'Dark Elf'|'Human'|'Dwarf'|'Dragonborn'|'Orc'|'Foxfolk'|'Catfolk'|'Dogfolk'
    type gender= 'Male'|'Female'
    const [fightingclass,setFightingclass]=useState<fightingclasses>('Knight');
    const [specie,setSpecie]=useState<species>('Human');
    const [name,setName]=useState("");
    const [lore,setLore]=useState("");
    const [age,setAge]=useState(0);
    const [Gender,setGender]=useState<gender>("Male")
    const min=10;
    const handleAge= (e: React.ChangeEvent<HTMLInputElement>) =>{
        const newValue = Math.max(min, Number(e.target.value));
        setAge(newValue);
    }
    const handleClass= (e:React.ChangeEvent<HTMLSelectElement>) => {
        const newclass= e.target.value as fightingclasses
        setFightingclass(newclass)
    }
    const handleSpecie= (e:React.ChangeEvent<HTMLSelectElement>) => {
        const newspecie= e.target.value as species
        setSpecie(newspecie)
    }
       const handlegender= (e:React.ChangeEvent<HTMLInputElement>) => {
        const newsgender= e.target.value as gender
        setGender(newsgender)
    }
async function handlesubmit(){
  const {data, error} = await supabase
  .from('characters')
  .insert({name,age,fightingclass,specie,Gender,lore})
  if (error) {
    console.log('Insertfailed:',error)
  }
  console.log('character saved:', data)
}
    return (
    <>
    <div className="SheetContainer">
        <h3>Character sheet</h3>
        <form className='formContainer'>
        <input className='inputElement' type='text' placeholder='Character Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <p>(Minimum age is 10yo. if set below the limit it will be set automaticallyto 10yo.)</p>
        <input className='inputElement' type='number' placeholder='Age'  min={min}  onChange={handleAge}/>
        <br/>
        <select className='inputElement' value={fightingclass} onChange={handleClass}>
            <option value='Knight'>Knight</option>
            <option value='Warrior'>Warrior</option>
            <option value='Rogue'>Rogue</option> 
            <option value='Paladin'>Paladin</option> 
            <option value='Spellblade'>Spellblade</option> 
            <option value='Wizard'>Wizard</option> 
            <option value='Catalyst'>Catalyst</option> 
            <option value='Archer'>Archer</option> 
            <option value='Morpher'>Morpher</option> 
            <option value='Beast tamer'>Beast tamer</option> 
            <option value='Summoner'>Summoner</option> 
            <option value='Martial artist'>Martial artist</option> 
        </select>
        <br/>
        <select className='inputElement' value={specie} onChange={handleSpecie}>
            <option value='Human'>Human</option>
            <option value='Dwarf'>Dwarf</option>
            <option value='Orc'>Orc</option> 
            <option value='Forest Elf'>Forest Elf</option> 
            <option value='Ice Elf'>Ice Elf</option> 
            <option value='Dark Elf'>Dark Elf</option> 
            <option value='Dragonborn'>Dragonborn</option> 
            <option value='Foxfolk'>Foxfolk</option> 
            <option value='Catfolk'>Catfolk</option> 
            <option value='Dogfolk'>Dogfolk</option>  
        </select>
        <br/>
        <label>Gender:</label>
        <label>
        <input id='Male' name='gender' type='radio' value='Male' onChange={handlegender} checked={Gender === 'Male'}/> Male
        </label>
        <label>
        <input id='Female' name='gender'type='radio'value='Female' onChange={handlegender} checked={Gender === 'Female'}/> Female
        </label>
        <br/>
        <label >Backstory:</label><br/>
        <textarea id="backstory" name="backstory" rows={10} cols={60} placeholder="Enter your character's backstory..." value={lore} onChange={(e) => setLore(e.target.value)}>   
        </textarea>
        <br/>
        <button type='button' onClick={handlesubmit}>submit</button>
        </form>
    </div>
    </>)
}