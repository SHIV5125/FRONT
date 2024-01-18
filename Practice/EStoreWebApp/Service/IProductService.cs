using EStoreWebApp.Entities;

namespace EStoreWebApp.Service;

public interface IProductService{

    public List<Product> GetAll();
    public Product GetById(int PId);
    public Boolean Update(Product p);
    public Boolean Delete(int PId);
    public Boolean AddProduct(Product p);


}