const useSVGicon = (classes) => {
    const iconClassList = Array.isArray(classes) ? classes.join(" ") : classes
    
    return {
        iconClassList
    };
}

export default useSVGicon;
