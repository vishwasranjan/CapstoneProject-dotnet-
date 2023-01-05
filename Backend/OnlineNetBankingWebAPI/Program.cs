using BankDBFirstLib;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//register the interface and class for the database access layer
builder.Services.Add(new ServiceDescriptor(typeof(IDatabase), typeof(DataAccessLayer), ServiceLifetime.Transient));
builder.Services.AddDbContext<BankDBContext>(options =>
options.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=bankDB;Integrated Security=True;Encrypt=False"));

//add cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("clients-allowed", policy =>
    {
        policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
    });
});

//enable jwt
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = "localhost",//ConfigurationManager.AppSetting["JWT:ValidIssuer"],
        ValidAudience = "localhost",// ConfigurationManager.AppSetting["JWT:ValidAudience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration.GetSection("jwtConfig").GetSection("Key").Value)),
        ClockSkew = TimeSpan.Zero
    };

} );

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("clients-allowed");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
