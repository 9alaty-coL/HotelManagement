const SearchInput = (props) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.setSearchInput(event.target.value)
        }
    }
  
    return <input value={props.searchInput} type="text" placeholder="🔍Tìm kiếm theo tên khách hàng . . ." onKeyDown={handleKeyDown} />
}

export default SearchInput;