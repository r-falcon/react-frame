import React, { Fragment, memo } from 'react';
import { useContext, useState } from 'react';

/**
 * context api:在树组件中传递数据，不用为每一层都传递的props
 * useContext:用于函数组件中订阅上层context的变更，获取上层context传递的value props值
 * const value = useContext(MyContext) context所取的当前值遵守就近原则
 * 常用于祖先与后代组件通信
 */

let userInfo = {
  name: 'falcon',
  age: 20,
};

let jobInfo = {
  occupation: 'IT',
  salary: 3000,
};

const UserContext = React.createContext();
const JobContext = React.createContext();

const ContextFunc = () => {
  let [user, setUser] = useState(userInfo);
  let [job, setJob] = useState(jobInfo);

  let handleUser = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  let handleJob = () => {
    setJob({ ...job, salary: job.salary + 1000 });
  };

  return (
    <Fragment>
      <UserContext.Provider value={{ user, handleUser }}>
        <ChangeUser />
      </UserContext.Provider>

      <JobContext.Provider value={{ job: job, handleJob: handleJob }}>
        <ChangeJob />
      </JobContext.Provider>
    </Fragment>
  );
};

function ChangeUser() {
  const { user, handleUser } = useContext(UserContext);

  return (
    <div>
      <p>
        current user is:{user.name} - {user.age}
      </p>
      <button onClick={handleUser}>age++</button>
    </div>
  );
}

/**
 * 组件优化：
 * 存在问题：
 * 1.只要执行setState，即使数据不改变，也会rerender
 * 2.只要当前组件rerender，其子组件也会rerender
 * 高效改进：
 * 只有当前组件的props或state改变时，才会rerender
 * 原因：
 * component中的shouldComponentUpdate总是返回true
 * 解决：
 * 1.重写shouldComponentUpdate
 * 2.使用PureComponent（项目用法）（检测所有的props）
 * 3.使用React.memo(可进行局部优化)
 */

const ChangeJob = () => {
  let jobValue = useContext(JobContext);
  let job = jobValue.job;
  let handleJob = jobValue.handleJob;

  return <Job job={job} handleJob={handleJob} />;
};

const Job = memo(({ job, handleJob }) => {
  return (
    <div>
      <p>
        job: {job.occupation}-{job.salary}
      </p>
      <button onClick={handleJob}>salary++</button>
    </div>
  );
});

export default ContextFunc;
