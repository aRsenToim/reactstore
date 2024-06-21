import { FC, useState } from "react";
import { Slider } from "../features/slider";
import { Catalog } from "../entities/products";
import { IProductCard } from "../entities/products/model/types";
import { useProductCards } from "../shared/hooks/useProductCards";
import Loader from "../widgets/loader/loader";
import { Banners, closeBanner } from "../entities/banners";
import { useAppDispatch, useAppSelector } from "../app/appStore";





const Home: FC = () => {
 const productCards = useProductCards()
 const [searchInput, setSearchInput] = useState<string>('')
 const banners = useAppSelector(state => state.bannersSlice.banners)
 const dispatch = useAppDispatch()

 const searchFilm = (array: IProductCard[], value: string) => {
  if (!value) return array
  return array?.filter((item) => {
   return item.title.toLowerCase().includes(value.toLowerCase())
  })
 }

 return <div>
  <Slider />
  <Banners banners={banners} close={(id: number) => {dispatch(closeBanner(id))}}/>
  {productCards ? <Catalog productCards={searchFilm(productCards ?? [], searchInput) ?? []} searchInput={searchInput} setSearchInput={(value: string) => setSearchInput(value)} /> : <Loader/>}
 </div>
}

export default Home