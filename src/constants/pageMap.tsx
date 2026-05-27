import HeaderInput from "../components/Header/HeaderInput.tsx"
export const PageMap = {
     home: (props?:any) => <HeaderInput {...props} disabled={true}/>,

    search: (props?:any) =>  <HeaderInput {...props} disabled={false} />
    
}