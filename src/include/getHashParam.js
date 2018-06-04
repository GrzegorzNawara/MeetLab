const getHashParam = (index) => {
       return(window.location.hash.substring(1).split("/")[index]);
}

export default getHashParam
