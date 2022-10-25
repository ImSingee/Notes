- ```go
  func gcd(i, j int) int {
      if i > j {
          i, j = j, i
      }
      
      for i != 0 { // assert i <= j
          i, j = j % i, i
      }
      
      return j
  }
  
  ```