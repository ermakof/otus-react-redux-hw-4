# Домашнее задание #4 Components lifecycle
Цель:

Написать "сложный" компонент с логикой с рядом дочерних презентационных компонентов, использующих методы жизненного цикла

Написать "сложный" компонент с логикой с рядом дочерних презентационных компонентов(можно как основу взять дз из урока про JSX)
Описать constructor как минимум в одном компоненте, объявить в конструкторе стейт и привязать контекст методов
Описать componentDidMount как минимум в одном компоненте, получить в нем данные сервера(можно использовать заглушку или сторонние сервисы, например https://jsonplaceholder.typicode.com/). Описать подписку на событие
Описать shouldComponentUpdate как минимум в одном компоненте, произвести в нем оптимизацию производительности(если будет притянутый за уши случай - ничего страшного)
Описать componentDidUpdate как минимум в одном компоненте, описать в нем условие реализовать обновление стейта при этом условии
Описать componentWillUnmout в компоненте, где в рамках componentDidMount была подписка на событие, реализовать отписку от этого события
Описать все остальные методы с каким-либо функционалом
Написать компонент с отловом ошибок, обернуть в него любой компонент
