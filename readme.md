### Introduction

Resolve resolves a final value, it may be passed a function or a value and calls the function
to produce a value in that mode.

### Installation

```language-shell
npm install --save whydoidoit-resolver
```

### Usage

```language-javascript
import resolve from 'whydoidoit-resolver'

...

this.y = 10;
console.log(resolve(this.y)); //Logs 10
this.y = function() {
    return 20;
}
console.log(resolve(this.y)); //Logs 20


```
