
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using Wship.Extensions;
using Wship.Database.Models;

namespace Wship.Database
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options)
            : base(options)
        {

        }
        public DbSet<User> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly<Program>();
        }
    }
}
