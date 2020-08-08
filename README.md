<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)

<!-- ABOUT THE PROJECT -->

## About The Project

![image](./src/data/img/app.png)

Campus Map Köln - based on React and OpenLayers. The Campus Map is an interactive and web based informationssystem for university campus environment. It is a so called geographic information system (GIS) that allows
the online-search for persons, buildings and facilities. The results of the queries are enhanced with spatial information. It improves the orientation on campus by using geodata services.

Here are some of the campus maps key features:

- based on modern web2.0 technologies such as React.js, Node and AJAX
- search for buildings, persons and facilities related informations
- and many more to come...

### Built With

The Campus Map is built with the following libraries and frameworks:

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/de/)
- [OpenLayers](https://openlayers.org/)
- [react-geo](https://github.com/terrestris/react-geo)
- [antd](https://ant.design/)

<!-- Development requirements -->

## Development requirements

- Node.js 10.13.0 or later
- npm 6.8.9 or later
- Git 2.11 or later

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo

```sh
git clone https://github.com/dmenneck/campus-map.git
```

2. Install NPM packages

```sh
npm install
```

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

- needs to be filled with information - coming soon!

<!-- Additional informations -->

## Additional informations

- due to "problems" with the context api not all layers could initially be created within the Layers.js component.
  Could be fixed by putting the provider one stage up (app.js or index.js).

- attributes
  - entrance = entrance, not barrier free
  - barrierfree = entrance, barrierfree

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Dirk Mennecke - [@your_twitter](https://twitter.com/your_username) - email@example.com

Dr. rer. nat. Christian Willmes - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
