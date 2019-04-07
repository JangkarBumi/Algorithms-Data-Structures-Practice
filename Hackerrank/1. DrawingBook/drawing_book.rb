def pageCount(n, p)

    #front
    front = (p/2).floor
    
    #
    back = (n/2).floor - (p/2).floor
    
    result = [front, back].min
    return result
    
    end