import { FC } from 'react'
import s from './search.module.scss'

interface IProps {
 searchInput: string,
 setSearchInput: (value: string) => void,
}

const Search: FC<IProps> = ({searchInput, setSearchInput}) => {
 
 return <div className={s.Search}>
  <input type="text" placeholder='Search' value={searchInput} onChange={(e) => {
   setSearchInput(e.currentTarget.value)
  }} className={s.Search__input} />
  <img src="/img/search.svg" className={s.Search__img} alt="" />
 </div>
}


export default Search