package caf.war.TaskDevelopmentProject0002A.taskclient;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import com.webmethods.caf.faces.annotations.DTManagedBean;
import com.webmethods.caf.faces.annotations.BeanType;
import com.webmethods.caf.faces.data.task.impl.BaseTaskRuleContext;

@ManagedBean(name = "Task002RuleContext")
@SessionScoped
@DTManagedBean(displayName = "Task002 Rule Context", beanType = BeanType.DEFAULT)
public class Task002RuleContext  extends  com.webmethods.caf.faces.data.task.impl.BaseTaskRuleContext {
}