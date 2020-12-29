---
id: design-patterns-typescript
title: 设计模式
---

设计模式是针对重复出现的问题的得出的解决方案；即是**如何解决某些问题的指导方针**。它们不是可以直接贴入应用程序然后等待奇迹发生的类、包或库。相反，这些东西是指导你如何在特定情况下解决特定问题的指南。

维基百科这样描述他们：

> 在软件工程中，软件设计模式是对软件设计中给定上下文中常见问题的通用可复用解决方案。
> 它并不是一个完整的设计，可以直接转换为源代码或机器代码。
> 它是用于解决同一类问题的描述或模板，可以在许多不同的情况下使用。

## 注意

开发人员(大多数是初学者)会犯过度思考和过于强调设计模式的错误，这将产生大量恐怖的、难以维护的杂乱无章的代码。经验教训告诉我们，应该让你的代码库尽可能简单，一旦进入开发阶段，您就可以发现代码库中重复出现的模式，在这种情况下，你便可以在接下来的开发中实现相关的设计模式。

- 设计模式并不是解决所有问题的灵丹妙药。
- 不要过于强调使用他们，否则将会带来一系列问题。
- 请记住，设计模式是对问题的解决方案，而不是寻找问题的解决方案，所以不要过于解读。
- 如果用在正确的地方，正确的方式，他们可以证明是救世主，否则它们会导致代码混乱不堪。

:::note 注意
下面的代码示例是用 Typescript 编写的，相信它不会妨碍到你的理解，因为不管怎样概念都是相同的。
:::

## 设计模式的类型

本指南是关于四人帮(GoF)设计模式的，它指的是**介绍这些设计模式的书的四位作者**。设计模式有三种类型:

- [创建型（Creational）](#创建型)
- 架构型（Structural）
- 行为型（Behavioral）

## 创建型

简单来说：

> 创建模式主要关注如何实例化一个对象或一组相关对象。

维基百科中：

> 在软件工程中，创建设计模式是处理对象创建机制的设计模式，试图以适合情况的方式创建对象。对象创建的基本形式可能会导致设计问题或增加设计的复杂性。创建设计模式通过控制对象创建来解决这个问题。

有 6 种创建型设计模式：

### 🏠 简单工厂模式

一个生活中的例子：

> 思考一下，你正在建造一所房子，你需要一扇门。这时，你可以穿上你的木匠工作服，带一些木头、胶水、钉子和构建一扇门所需的所有工具，开始构建你的房子。或者你可以将这些交付给工厂，让它来建造一扇门，最后交付给你，这样你不需要学习任何关于门制造或处理为了制造一扇门所带来的不必要麻烦。

简单来说：

> 简单工厂模式，只是为了在客户端生成一个实例，而不向客户端公开任何实例化逻辑

维基百科中：

> 在面向对象编程(OOP)中，工厂是用于创建其他对象的对象——正式意义上，工厂是一个函数或方法，它从某种方法调用(假定是“新”的)中返回不同原型或类的对象。

**代码示例**：

首先我们得有个门的接口，然后实现它。

```ts
interface Door {
  getWidth: () => number;
  getHeight: () => number;
}

class WoodenDoor implements Door {
  protected width;
  protected height;

  constructer(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }
}
```

然后我们有自己的门工厂，制造门和退货。

```ts
class DoorFactory {
  public static makeDoor(width, height): Door {
    return new WoodenDoor(width, height);
  }
}
```

它可以这样调用:

```ts
// 定制一个宽高为 100x200 的门
const door = DoorFactory.makeDoor(100, 200);
console.log('Width: ', door.getWidth());
console.log('Height: ', door.getHeight());

// 定制一个宽高为 50x100 的门
const door2 = DoorFactory.makeDoor(50, 100);
```

**何时使用**？

当创建一个对象不仅仅是一些赋值并且涉及到一些逻辑时，将它放在一个专用的工厂中而不是到处重复相同的代码，这是非常有意义的。

### 🏭 工厂模式

一个生活中的例子：

> 以招聘经理为例。一个人去面试每个职位是不可能的。根据职位空缺，她必须决定并将面试步骤分配给不同的人

简单来说：

> 它提供了一种将实例化逻辑委托给子类的方法。

维基百科中：

> 在基于类的编程中，工厂方法模式是一种创建模式，它使用工厂方法来处理创建对象的问题，而不必指定要创建的对象的确切类。这是通过调用工厂方法来创建对象而不是通过调用构造函数来实现的——或者在接口中指定并由子类实现，或者在基类中实现并由派生类可选地覆盖。

**代码示例**：

以我们的招聘经理为例。首先，我们有一个面试官界面和一些实现：

```ts
interface Interviewer {
  askQuestions: () => void
}

class Developer implements Interviewer {
  public askQuestions(): void {
    console.log('Asking about design patterns!');
  }
}

class CommunityExecutive implements Interviewer {
  public askQuestions(): void {
    console.log('Asking about community building');
  }
}
```

现在我们可以创建一个 `HiringManager`。

```ts
abstract class HiringManager {
  // 工厂方法
  abstract protected makeInterviewer: () => Interviewer;

  public takeInterview(): void {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}
```

现在，任何一个后代都可以扩展它，提供所需的面试官：

```ts
class DevelopmentManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new CommunityExecutive();
  }
}
```

然后我们就可以这样使用：

```ts
const devManager = new DevelopmentManager();
devManager.takeInterview(); // 输出: Asking about design patterns

const marketingManager = new MarketingManager();
marketingManager.takeInterview(); // 输出: Asking about community building.
```

**何时使用？**

当类中有一些泛型处理，但所需的子类是在运行时动态确定的时候，这很有用。或者换句话说，当使用者端不知道它可能需要什么确切的子类时。

### 🔨 抽象工厂

一个真实的例子：

> 从简单的工厂扩展到我们的门户样板。根据你的需要，你可以从一家木门店买一扇木门，从一家铁门店买一扇铁门，或者从相关的商店买一扇 PVC 门。另外，你可能需要一个有不同专业的人来装门，比如木门的木匠，铁门的焊工等等。正如你所看到的，现在门之间有一种依赖性，木门需要木匠，铁门需要焊工等等。

简单来说：

> 抽象工厂就是工厂中的工厂;将独立但相关/依赖的工厂组合在一起，而不指定它们具体的类的工厂。

维基百科：

> 抽象工厂模式提供了一种方法来封装一组拥有共同主题的独立工厂，而无需指定它们的具体类



## Reference

[design-patterns-for-humans](https://roadmap.sh/guides/design-patterns-for-humans)
