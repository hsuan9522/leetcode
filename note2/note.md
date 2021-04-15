# Note

### **Array duplicate**
```javascript
    let array = ['apple', 'orange', 'banana', 'apple']
    let newArray = [...new Set(array)] // ['apple', 'orange', 'banana']
```

### **解決浮點數問題**
```javascript
function sum(a, b) {
    let tmpA = a.toString();
    let tmpB = b.toString();
    tmpA = tmpA.replace(/^.*\./g, '');
    tmpB = tmpB.replace(/^.*\./g, '');
    a = a * 10 ** tmpA.length;
    b = b * 10 ** tmpB.length;
    let sum = a + b;
    return tmpA.length >= tmpB.length ? sum / 10 ** tmpA.length : sum / 10 ** tmpB.length;
}

console.log(sum(0.1, 0.7))
```