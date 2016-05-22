using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MyLibrary.Model
{
    public class AttivitaDbContext : DbContext
    {
        public virtual DbSet<Cliente> Clienti { get; set; }
        public virtual DbSet<Commessa> Commesse { get; set; }
        public virtual DbSet<Locazione> Locazioni { get; set; }
        public virtual DbSet<TipoAttivita> TipiAttivita { get; set; }
        public virtual DbSet<Fattura> Fatture { get; set; }
        public virtual DbSet<Progetto> Progetti { get; set; }
        public virtual DbSet<Pagamento> Pagamenti { get; set; }
        public virtual DbSet<Attivita> Attivita { get; set; }
        public virtual DbSet<Diario> Diario { get; set; }
        public virtual DbSet<VoceSpesa> VociSpesa { get; set; }
        public virtual DbSet<Spesa> Spese { get; set; }
        public virtual DbSet<Preventivo> Preventivi { get; set; }
        public virtual DbSet<Tecnologia> Tecnologie { get; set; }

        public AttivitaDbContext(DbContextOptions<AttivitaDbContext> options) :
            base(options)
        { }

        //protected override void OnConfiguring(DbContextOptionsBuilder options)
        //{
        //    options.UseSqlServer("Server=tcp:m9sydhx1ln.database.windows.net,1433;Database=lmattivita_Copia;User ID=myOwnAdmin@m9sydhx1ln;Password=61Stress;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        //}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
            builder.Entity<Cliente>().ToTable("Clienti");
            builder.Entity<Cliente>().HasKey(cli => cli.ClienteNo);

            // configurazione tabella commesse
            builder.Entity<Commessa>().ToTable("Commesse");
            builder.Entity<Commessa>().HasKey(cli => cli.CommessaNo);

            builder.Entity<Commessa>().HasOne(loc => loc.Cliente)
                .WithMany(cli => cli.Commesse).HasForeignKey(loc => loc.ClienteNo)
                .IsRequired(false);

            builder.Entity<Commessa>().HasOne(loc => loc.Tipo)
                .WithMany(cli => cli.Commesse).HasForeignKey(loc => loc.TipoAttivitaNo)
                .IsRequired(false);


            // configurazione tabella locazioni
            builder.Entity<Locazione>().ToTable("Locazioni");
            builder.Entity<Locazione>().HasKey(loc => loc.LocazioneNo);

            builder.Entity<Locazione>().HasOne(loc => loc.Cliente)
                .WithMany(cli => cli.Locazioni).HasForeignKey(loc => loc.ClienteNo)
                .IsRequired(true);

            // configurazione tabella tipo attività
            builder.Entity<TipoAttivita>().ToTable("TipiAttivita");
            builder.Entity<TipoAttivita>().HasKey(cli => cli.TipoAttivitaNo);

            // configurazione tabella fatture
            builder.Entity<Fattura>().ToTable("Fatture");
            builder.Entity<Fattura>().HasKey(loc => loc.FatturaNo);

            builder.Entity<Fattura>().HasOne(loc => loc.Cliente)
                .WithMany(cli => cli.Fatture).HasForeignKey(loc => loc.ClienteNo)
                .IsRequired(true);

            // configurazione tabella preventivi
            builder.Entity<Preventivo>().ToTable("Preventivi");
            builder.Entity<Preventivo>().HasKey(loc => loc.PreventivoNo);

            builder.Entity<Preventivo>().HasOne(loc => loc.Cliente)
                .WithMany(cli => cli.Preventivi).HasForeignKey(loc => loc.ClienteNo)
                .IsRequired(true);

            // configurazione tabella righe fatture
            builder.Entity<FatturaRiga>().ToTable("Fatture_Righe");
            builder.Entity<FatturaRiga>().HasKey(loc => loc.FatturaRigaNo);

            builder.Entity<FatturaRiga>().HasOne(loc => loc.Fattura)
                .WithMany(cli => cli.Righe).HasForeignKey(loc => loc.FatturaNo)
                .IsRequired(false);

            builder.Entity<FatturaRiga>().HasOne(loc => loc.Commessa)
                .WithMany(cli => cli.RigheFatture).HasForeignKey(loc => loc.CommessaNo)
                .IsRequired(false);


            // configurazione tabella progetti
            builder.Entity<Progetto>().ToTable("Progetti");
            builder.Entity<Progetto>().HasKey(loc => loc.ProgettoNo);

            builder.Entity<Progetto>().HasOne(loc => loc.Cliente)
                .WithMany(cli => cli.Progetti).HasForeignKey(loc => loc.ClienteNo)
                .IsRequired(false);


            // configurazione tabella pagamenti
            builder.Entity<Pagamento>().ToTable("Pagamenti");
            builder.Entity<Pagamento>().HasKey(loc => loc.PagamentoNo);

            builder.Entity<Pagamento>().HasOne(loc => loc.Cliente)
                .WithMany(cli => cli.Pagamenti).HasForeignKey(loc => loc.ClienteNo)
                .IsRequired(true);

            builder.Entity<Pagamento>().HasOne(loc => loc.Commessa)
                .WithMany(cli => cli.Pagamenti).HasForeignKey(loc => loc.CommessaNo)
                .IsRequired(false);

            builder.Entity<Pagamento>().HasOne(loc => loc.Fattura)
                .WithMany(cli => cli.Pagamenti).HasForeignKey(loc => loc.FatturaNo)
                .IsRequired(false);

            // configurazione tabella attività
            builder.Entity<Attivita>().ToTable("Attivita");
            builder.Entity<Attivita>().HasKey(loc => loc.AttivitaNo);

            builder.Entity<Attivita>().HasOne(loc => loc.Cliente)
                .WithMany(cli => cli.Attivita).HasForeignKey(loc => loc.ClienteNo)
                .IsRequired(false);

            builder.Entity<Attivita>().HasOne(loc => loc.Commessa)
                .WithMany(cli => cli.Attivita).HasForeignKey(loc => loc.CommessaNo)
                .IsRequired(false);

            builder.Entity<Attivita>().HasOne(loc => loc.Locazione)
                .WithMany(cli => cli.Attivita).HasForeignKey(loc => loc.LocazioneNo)
                .IsRequired(false);

            builder.Entity<Attivita>().HasOne(loc => loc.Tipo)
                .WithMany(cli => cli.Attivita).HasForeignKey(loc => loc.TipoAttivitaNo)
                .IsRequired(false);

            builder.Entity<Attivita>().HasOne(loc => loc.Fattura)
                .WithMany(cli => cli.Attivita).HasForeignKey(loc => loc.FatturaNo)
                .IsRequired(false);

            builder.Entity<Attivita>().HasOne(loc => loc.Progetto)
                .WithMany(cli => cli.Attivita).HasForeignKey(loc => loc.ProgettoNo)
                .IsRequired(false);

            builder.Entity<Attivita>().HasOne(loc => loc.Pagamento)
                .WithMany(cli => cli.Attivita).HasForeignKey(loc => loc.PagamentoNo)
                .IsRequired(false);

            // configurazione tabella diario
            builder.Entity<Diario>().ToTable("Diario");
            builder.Entity<Diario>().HasKey(cli => cli.DiarioNo);

            // configurazione tabella voce spesa
            builder.Entity<VoceSpesa>().ToTable("VociSpesa");
            builder.Entity<VoceSpesa>().HasKey(cli => cli.VoceSpesaNo);

            // configurazione tabella gruppo voce spesa
            builder.Entity<GruppoVoceSpesa>().ToTable("GruppiVoceSpesa");
            builder.Entity<GruppoVoceSpesa>().HasKey(cli => cli.GruppoVoceSpesaNo);

            // configurazione tabella gruppo voce spesa
            builder.Entity<Spesa>().ToTable("Spese");
            builder.Entity<Spesa>().HasKey(cli => cli.SpesaNo);

            builder.Entity<Spesa>().HasOne(loc => loc.Voce)
                .WithMany(cli => cli.Spese).HasForeignKey(loc => loc.VoceSpesaNo)
                .IsRequired(false);

            //builder.Entity<Spesa>()
            //    .Ignore(b => b.TsRegistrazione);
            builder.Entity<Spesa>()
                .Property(b => b.TsRegistrazione)
                .ValueGeneratedOnAddOrUpdate();

            builder.Entity<VoceSpesa2Gruppo>().ToTable("VociSpesa2Gruppi");
            builder.Entity<VoceSpesa2Gruppo>().HasKey(cli => new { cli.GruppoVoceSpesaNo, cli.VoceSpesaNo});

            builder.Entity<VoceSpesa2Gruppo>()
                          .HasOne(pt => pt.Gruppo)
                          .WithMany(p => p.Voci)
                          .HasForeignKey(pt => pt.GruppoVoceSpesaNo);

            builder.Entity<VoceSpesa2Gruppo>()
                .HasOne(pt => pt.Voce)
                .WithMany(t => t.Gruppi)
                .HasForeignKey(pt => pt.VoceSpesaNo);

            // configurazione tabella diario
            builder.Entity<Tecnologia>().ToTable("Tecnologie");
            builder.Entity<Tecnologia>().HasKey(cli => cli.TecnologiaNo);

        }
    }
}
