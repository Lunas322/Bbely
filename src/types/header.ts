

type IconType = React.ComponentType<{className: string}>
type PageType = "home"|"search"

export type HeaderSubProps = {
    Page?: PageType
    text?: string
    icons?: IconType[]
    setSearch?: React.Dispatch<React.SetStateAction<string>>
}