## GraphQL 递归查询

### 场景描述

最近遇到了一个场景，想创建一个 GraphQL 查询，该查询可以递归调用类型的子项。就像一个棵树(Tree)，数据中有孩子，孩子可能还有孩子，深度不确定。结构如下：

```typescript
type Menu {
  id:ID;
  parentId:String;
  name:String;
  createTime:String;
  updateTime:String
  #子类也是Menu类型
  children:Menu[] 
} 



```

如果可以确定 层级深度，,这里**假设深度为 3**，我们可以这样写GraphQL 查询

```scheme
query(){
  getMenus(){
     id
     parentId
     name
     children{ # 孩子节点
       id
       parentId
       name
       children{ # 孩子节点
        id
        parentId
        name
       }
     }
  }
}
```

上面展示了 深度为3的时候，GraphQL 查询条件。

**但是这里我遇到的问题是 深度不确定。那么需要使用 片段(Fragments) **

### 片段(Fragments) 

 GraphQL 包含了称作**片段(Fragments)**的. **可复用单元** 。片段使你能够组织一组字段，然后在需要它们的地方引入。下面例子展示了如何使用片段解决上述问题。

```scheme
query(){
  getMenus(){
     id
     parentId
     name
     children{
      ...MeusFragment # 注意这里
     }
  }
}

# 定义一个片段
fragment MeusFragment on Menu{
   id
   parentId
   name
   children{
     id
     parentId
     name
   }
}

```

### 