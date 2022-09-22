- #前端 #React
-
- ## 一次性初始化
	- ```js
	  import { useRef } from 'react';
	  
	  // 创建一个自定义 Hook 用于执行一次性代码
	  function useSingleton(callback) {
	    // 用一个 called ref 标记 callback 是否执行过
	    const called = useRef(false);
	    // 如果已经执行过，则直接返回
	    if (called.current) return;
	    // 第一次调用时直接执行
	    callBack();
	    // 设置标记为已执行过
	    called.current = true;
	  }
	  
	  
	  const MyComp = () => {
	    // 使用自定义 Hook
	    useSingleton(() => {
	      console.log('这段代码只执行一次');
	    });
	  
	    return (
	      <div>My Component</div>
	    );
	  };
	  ```
- ## 异步获取数据
	- ```js
	  
	  import { useState } from 'react';
	  
	  const useAsync = (asyncFunction) => {
	    // 设置三个异步逻辑相关的 state
	    const [data, setData] = useState(null);
	    const [loading, setLoading] = useState(false);
	    const [error, setError] = useState(null);
	    // 定义一个 callback 用于执行异步逻辑
	    const execute = useCallback(() => {
	      // 请求开始时，设置 loading 为 true，清除已有数据和 error 状态
	      setLoading(true);
	      setData(null);
	      setError(null);
	      return asyncFunction()
	        .then((response) => {
	          // 请求成功时，将数据写进 state，设置 loading 为 false
	          setData(response);
	          setLoading(false);
	        })
	        .catch((error) => {
	          // 请求失败时，设置 loading 为 false，并设置错误状态
	          setError(error);
	          setLoading(false);
	        });
	    }, [asyncFunction]);
	  
	    return { execute, loading, data, error };
	  };
	  
	  
	  import React from "react";
	  
	  function UserList() {
	    // 通过 useAsync 这个函数，只需要提供异步逻辑的实现
	    const {
	      execute: fetchUsers,
	      data: users,
	      loading,
	      error,
	    } = useAsync(async () => {
	      const res = await fetch("https://reqres.in/api/users/");
	      const json = await res.json();
	      return json.data;
	    });
	    
	    return (
	      // 根据状态渲染 UI...
	    );
	  }
	  ```
	- 更建议：[[React Query]]
- ## 监听滚动条
	- ```js
	  
	  import { useState, useEffect } from 'react';
	  
	  // 获取横向，纵向滚动条位置
	  const getPosition = () => {
	    return {
	      x: document.body.scrollLeft,
	      y: document.body.scrollTop,
	    };
	  };
	  const useScroll = () => {
	    // 定一个 position 这个 state 保存滚动条位置
	    const [position, setPosition] = useState(getPosition());
	    useEffect(() => {
	      const handler = () => {
	        setPosition(getPosition(document));
	      };
	      // 监听 scroll 事件，更新滚动条位置
	      document.addEventListener("scroll", handler);
	      return () => {
	        // 组件销毁时，取消事件监听
	        document.removeEventListener("scroll", handler);
	      };
	    }, []);
	    return position;
	  };
	  
	  
	  import React, { useCallback } from 'react';
	  
	  function ScrollTop() {
	    const { y } = useScroll();
	  
	    const goTop = useCallback(() => {
	      document.body.scrollTop = 0;
	    }, []);
	  
	    const style = {
	      position: "fixed",
	      right: "10px",
	      bottom: "10px",
	    };
	    // 当滚动条位置纵向超过 300 时，显示返回顶部按钮
	    if (y > 300) {
	      return (
	        <button onClick={goTop} style={style}>
	          Back to Top
	        </button>
	      );
	    }
	    // 否则不 render 任何 UI
	    return null;
	  }
	  
	  ```
	-