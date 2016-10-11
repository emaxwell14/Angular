
/**
For creating a randomly generated product. Could be replaced with
a http service
*/
class productFactory {
  static GetProduct(): CocaCola {
    return new CocaCola();
  }
}
